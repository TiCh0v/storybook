import { Meta, StoryObj } from "@storybook/react";
import App from "./App";

import { expect, userEvent, within, waitFor } from "@storybook/test"; // для тестирования взаимодействий

const meta: Meta = {
  title: "Pages/App",
  component: App,
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {},
};


// можно писать тесты

export const Iteraction: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const button = await canvas.getByRole("button", { name: "я кнопка" });
    const input = await canvas.getByPlaceholderText("Введите что-нибудь");

    userEvent.click(input);

    userEvent.type(input, "пользователь вставил текст");

    await waitFor(() => {
      expect(input).toHaveValue("пользователь вставил текст");
    });

    userEvent.click(button);

    const successMessage = await canvas.findByText("чиназес");

    expect(successMessage).toBeInTheDocument();
  },
};
