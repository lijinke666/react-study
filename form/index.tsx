import * as React from 'react'
import { getDisplayName } from '@root/utils/component'
import { FormComponentProps, FormItemProps } from 'antd/lib/form'

export default (WrappedComponent: any) => {
  return class AutoForm extends WrappedComponent {
    static displayName = `HOC(${getDisplayName(WrappedComponent)})`

    get hasError() {
      const fieldsError = this.getFieldsError() as any
      console.log(fieldsError)
      return Object.keys(fieldsError).some((field) => fieldsError[field])
    }

    getFormRef = (formRef: FormComponentProps) => {
      this.form = formRef
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          wrappedComponentRef={this.getFormRef}
          hasError={this.hasError}
        />
      )
    }
    componentDidMount() {
      const { validateFields, getFieldsValue, isFieldTouched, getFieldError, setFields } = this.form.props.form
      validateFields()

      Object.keys(getFieldsValue()).forEach((field) => {
        const error = isFieldTouched(field) && getFieldError(field)
        setFields({
          [field]: {
            errors: error,
          },
        })
      })

    }
  }
}
