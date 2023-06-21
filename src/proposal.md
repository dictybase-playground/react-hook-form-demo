# Proposal: New Form Validation Library for DSC Order Pages
Use the **react-hook-form** library instead of **Formik** for handling form validation.

Estimated Completion Time: < 1 day
# Motivation
Until last month, the Formik library had not receive any development since June 2021, and the updates it has received have been contributed mainly by a single developer. React-hook-form is still actively maintained by multiple developers. 

React-hook-form has other advantages over Formik
- 0 dependencies
- Performance
    - with Formik, every field in a form is rerendered when a single field is changed, which leads to noticeable slowdown in, for example, the Shipping Page.
- Smaller package (about 1/3 the size)

# Scope

### Page
- /order/checkout

### Main Components 

- ShippingPage.tsx
- PaymentPage.tsx

# Background

The OrderForm component conditionally renders  ShippingPage / PaymentPage / SubmitPage. 

OrderForm holds the formData state and passes `setFormData` to ShippingPage and PaymentPage. 

ShippingPage and PaymentPage have form fields which are all validated currently using Formik. 

When the continue button is clicked on ShippingPage or PaymentPage, if the fields are all valid, `setFormData` is called with the appropriate values. 

After PaymentPage, OrderForm proceeds to SubmitPage, which receives formData.

# Steps

1. In ShippingPage and PaymentPage, wrap the output in an html `<form`> element
2. In ShippingPage and PaymentPage, call the useForm hook to receive the `handleSubmit` function which is used to check if the forms are valid before the form is submitted. 
3. Wrap an `onSubmit` callback with `handleSubmit` and pass it into `<form>`'s `onSubmit` prop. 
4. Replace the Formik Provider component with react-hook-form's FormProvider. 
Since ShippingPage and PaymentPage use children components that actually contain the form fields, the provider will allow the children components to get the appropriate methods with the `useFormContext` hook. 
5. Pass the appropriate methods to the material-ui TextField components

# Testing 

From the dicty-stock-center repository, the many of the order flow components already have tests that can be resued but need to  be refactored to use vitest.