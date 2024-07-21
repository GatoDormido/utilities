import {
  InteractionResponseType,
} from "discord-interactions";

export const testModal = {
  type: InteractionResponseType.MODAL,
  data: {
    title: 'Test',
    custom_id: 'test-modal',
    components: [
      {
        type: 1, //Action row 1
        components: [
          {
            type: 4, //Text input in action row 1
            style: 1, //Short text
            label: 'Short Input',
            custom_id: 'short-input',
            placeholder: 'Short Input',
          },
        ],
      },
      {
        type: 1, //Action row 2
        components: [
          {
            type: 4, //Text input in action row 2
            style: 2, //Long text
            label: 'Paragraph Input',
            custom_id: 'paragraph-input',
            placeholder: 'Paragraph Input',
            required: false,
          },
        ],
      },
    ],
  },
};
