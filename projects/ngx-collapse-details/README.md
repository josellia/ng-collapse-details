# NgxCollapseDetails

<div style="display: inline_block">
    <img align="center" alt="js" src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" /> 
</div>

#Angular component for extra content


![npm](https://img.shields.io/npm/v/ngx-collapse-details)
![NPM](https://img.shields.io/npm/l/ngx-collapse-details)

![details](https://user-images.githubusercontent.com/33287490/149425680-230cacb4-85f9-4dfd-9ad8-eb5be691f4c0.PNG)

## How to install

Below are ways to install the library using npm or yarn:

```
npm i ngx-summary-details
# or
ng add ngx-summary-details
```

## How to use default component

<h6>First we need to import ours into some module to be used<h6>

```jsx
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgxCollapseDetailsComponent } from "ngx-collapse-details";
import { AppComponent } from "./app.component";
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxCollapseDetailsComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

```jsx
<ngx-summary-details>
  <ul>
    <li>Teste 1</li>
    <li>Teste 2</li>
  </ul>
</ngx-summary-details>
```

## How to use custom component

```jsx
<ngx-summary-details
  summary="Teste"
  width="60%"
  bgColor="#555"
  color="orange"
  borderRadius="5px 10px 15px 20px"
  bgHover="purple"
  boxShadow="0 0 5px 5px orange"
  colorHover="blue"
>
  <ul>
    <li>Teste 1</li>
    <li>Teste 2</li>
  </ul>
</ngx-summary-details>
```

## Properties

This component is an abstraction of a collapse, but using native HTML properties.

| Props        | type   | required | Description                       |
| ------------ | ------ | -------- | --------------------------------- |
| width        | string |          |                                   |
| summary      | string |          |                                   |
| bgColor      | string |          | Background color of summary       |
| bgHover      | string |          | Background color hover of summary |
| color        | string |          | Color of summary                  |
| colorHover   | string |          | Color hover of summary            |
| borderRadius | string |          | Border radius of summary          |
| border       | string |          | Border of summary                 |
| boxShadow    | string |          | Box shadow of summary             |
