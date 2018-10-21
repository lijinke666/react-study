import * as React from 'react'
import { Form } from 'antd'
import omit from 'lodash-es/omit'

const getDisplayName = (component: React.ComponentClass) => {
  return component.displayName || component.name || 'Component'
}

export interface IAutoBindFormHelpProps {
  hasError: boolean,
}

/**
 * @name AutoBindForm
 * @param {filterFields} string[]=[] 需要过滤(非必填)的字段
 * @param {WrappedComponent.defaultFieldsValue} object 初始值
 */
export default (filterFields: string[] = []) =>
  (WrappedComponent: React.ComponentClass<any>) => {
    class AutoBindForm extends WrappedComponent {
      static displayName = `HOC(${getDisplayName(WrappedComponent)})`

      get hasError() {
        const {
          form: { getFieldsError, isFieldTouched },
          defaultFieldsValue,
        } = this.props

        const isEdit = !!defaultFieldsValue

        let fieldsError = getFieldsError() as any

        filterFields.forEach((field) => {
          if (!isFieldTouched(field)) {
            fieldsError = omit(fieldsError, [field])
          }
        })
        return Object
          .keys(fieldsError)
          .some((field) => isEdit ? fieldsError[field] : (!isFieldTouched(field) || fieldsError[field]))
      }

      autoBindFormHelp: React.Component<{}, {}> = null

      getFormRef = (formRef: React.Component) => {
        this.autoBindFormHelp = formRef
      }

      render() {
        return (
          <WrappedComponent
            wrappedComponentRef={this.getFormRef}
            {...this.props}
            hasError={this.hasError}
          />
        )
      }
      componentDidMount() {
        const {
          form: {
            validateFields,
            getFieldsValue,
            setFields,
          },
        } = this.props

        validateFields()

        Object.keys(getFieldsValue())
          .filter((field) => !filterFields.includes(field))
          .forEach((field) => {
            setFields({
              [field]: {
                errors: null,
                status: null,
              },
            })
          })

        // 属性劫持 初始化默认值
        if (this.props.defaultFieldsValue) {
          this.props.form.setFieldsValue(this.props.defaultFieldsValue)
        }
      }
    }

    return Form.create()(AutoBindForm)
  }
