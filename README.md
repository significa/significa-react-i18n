<a href="https://significa.co"><img src="https://user-images.githubusercontent.com/4838076/70076649-20d29b00-15f7-11ea-9379-e2fa1889a525.png" alt="logo" width="300px"></a>

[![React][React.js]][React-url]

A Zero dependency opinionated Significa's i18n package for React.


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#messages-object">Messages object</a></li>
    <li><a href="#message-parameters">Message parameters</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

## Usage

Include the provider on the top level of your app.

```js
import { I18nProvider } from '@significa/react-i18n'

<I18nProvider messages={i18nMessages}>
  <App />
</I18nProvider>
```

You can either use the `useTranslation` helper or the `Translation` component

```js
import { useTranslation } from '@significa/react-i18n'

const YourComponent = () => {
  const { t } = useTranslation()

  return (
    <div>
      <p>{t('yourMessage')}</p>
    </div>
  )
}
```

```js
import { Translation } from '@significa/react-i18n'

const YourComponent = () => {
  return (
    <div>
      <Translation id="yourMessage" />
    </div>
  )
}
```

## Messages object

Your messages object should be according to the following example.

```
{
  id: message,
  anotherId: anotherMessage
}
```

You have to deal the language switcher outside this package.
If using Next.js you'll have that out of the box

## Message parameters

It's possible to add parameters to the message, a string between double curlybraces is represented as a parameter.


```js
// Messages Object
{
  greet: "Hello {{name}}"
}
```

```js
<Translation id="greet" values={{
  name: user.name   // {{name}} will be replaced by `user.name`
}} />

OR

<p>
  {t('greet', { name: user.name })}
</p>
```

## License

[MIT](https://github.com/Significa/significa-start/blob/master/LICENSE)

[![Significa footer](https://user-images.githubusercontent.com/17513388/71971185-fc736b00-3201-11ea-9678-090b6b6a0b3f.png)](https://significa.co)

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/