import { Component } from "./Component.js";
import { Input } from "./Input.js";
import { Label } from "./Label.js";
import { Form } from "./Form.js";

const title = new Component('h1', 'body', { innerText: 'Hello, World!' })
console.log(title)
title.build().render()

const form = new Form('body')

const label = new Label('Nome: ', form, { htmlFor: 'nameInput' })
const input = new Input(form, { id: 'nameInput', name: 'nameInput' })

form.addChildren(label, input)
form.render()

form.addChildren(
    new Component('br'),
    new Component('br'),
    new Label('Data de Nascimento', form, { htmlFor: 'birthdayInput' }),
    new Input(form, { id: 'birthdayInput', name: 'birthdayInput', type: 'date' })
)