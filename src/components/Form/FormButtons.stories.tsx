// FormWithButtons.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import FormWithButtons from './FormButtons';

const meta: Meta = {
    title: 'Example/Form',
    component: FormWithButtons,
  };
  
  export default meta;
  
  type Story = StoryObj;
  
  export const Default: Story = {
    args: {
        buttonText: 'Отправить',
        successMessage: 'Форма успешно отправлена!',
    },
  };
  
  export const WithDifferentButtonText: Story = {
    args: {
        buttonText: 'Подтвердить',
        successMessage: 'Спасибо за подтверждение!',
    },
  };
  
  export const WithoutMessage: Story = {
    args: {
        buttonText: 'Отправить',
        successMessage: '',
    },
  };
  
  
