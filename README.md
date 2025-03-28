# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will
remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right
into your project so you have full control over them. All of the commands except `eject` will still work, but they will
point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you
shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## Learn More

You can learn more in
the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# 1. Компонент App

## Объяснение:

**Provider**: Это компонент из библиотеки react-redux, который оборачивает ваше приложение и предоставляет доступ к Redux
store всем дочерним компонентам. Это позволяет использовать useSelector и useDispatch в любом компоненте, который
находится внутри Provider.

**store**: Это объект хранилища Redux, созданный в файле store, который хранит состояние приложения.

**CounterType и SettingBlockType**: Это типы TypeScript, которые описывают структуру состояния для счетчика и блока
настроек
соответственно. Это помогает в типизации данных и делает код более безопасным.

**App**: Это основной компонент вашего приложения, который рендерит SettingsBlock и Counter. Эти компоненты будут
взаимодействовать друг с другом через Redux.

2. # Компонент Counter

## Объяснение:

**useDispatch**: Хук, который позволяет вам отправлять действия (actions) в Redux store. В данном случае он используется
для отправки действий incrementAC и resetAC.

**useSelector**: Хук, который позволяет извлекать данные из Redux store. Здесь мы получаем состояние счетчика, которое
определено в CounterType.

**incrementCount**: Функция, которая увеличивает счетчик, если текущее значение меньше максимального. Она вызывает
dispatch с action, созданным incrementAC.

**resetCounter**: Функция, которая сбрасывает счетчик, вызывая dispatch с action, созданным resetAC.

**Рендеринг**: Компонент отображает текущее значение счетчика, сообщение об ошибке и две кнопки: "Inc" для увеличения
и "Reset" для сброса. Кнопки могут быть отключены в зависимости от состояния.

3. # Компонент SettingsBlock

## Объяснение:

**useState**: Хук, который позволяет управлять состоянием локальных переменных внутри компонента. Здесь он используется
для временного хранения значений maxValue и startValue, которые пользователь вводит.

**handleMaxValueChange и handleStartValueChange**: Эти функции обрабатывают изменения в полях ввода для максимального и
начального значений. Если введенное значение некорректно (например, отрицательное), оно вызывает действие
setErrorMessageAC для установки сообщения об ошибке.

**setValues**: Функция, которая обновляет настройки, если нет ошибок. Она вызывает действие updateSettingsAC, передавая
новые значения.

**Рендеринг**: Компонент отображает два поля ввода для максимального и начального значений, а также кнопку "Set",
которая устанавливает значения. Кнопка отключена, если есть сообщение об ошибке.

# 4. Компонент store

## Объяснение:

**combineReducers**: Функция, которая объединяет несколько редюсеров в один. В данном случае у вас есть только один
редюсер counterReducer, который управляет состоянием счетчика.

**createStore**: Функция, которая создает Redux store на основе объединенного редюсера.

**AppRootState**: Тип, который описывает полное состояние приложения, возвращаемое из корневого редюсера. Он
используется в useSelector для типизации состояния.

**window.store**: Это строка, которая позволяет вам получить доступ к вашему хранилищу Redux из консоли браузера для
отладки.