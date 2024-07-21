import {
  InteractionResponseType,
} from "discord-interactions";

const ruffles = {}; // Object that contains all created ruffles

export function createRuffle(name) {
  const participants = []; // Array that contains all participants of a ruffle
  ruffles[name] = {
    participants: participants,
    addParticipant: function (participantName, tickets) {
      participants.push({ name: participantName, tickets: tickets });
    },
  };
}

export const ruffleCreationModal = {
  type: InteractionResponseType.MODAL,
  data: {
    title: 'Create Ruffle',
    custom_id: 'ruffle-creation',
    components: [
      {
        type: 1, //Action row 1
        components: [
          {
            type: 4, //Text imput for ruffle name
            style: 1, //Short input
            label: 'Nombre del sorteo',
            custom_id: 'ruffle',
            placeholder: 'Nombre del sorteo'
          },
        ],
      },
    ],
  },
};

export const ruffleMembersModal = {
  type: InteractionResponseType.MODAL,
  data: {
    title: 'Add Participant',
    custom_id: 'ruffle-participants',
    components: [
      {
        type: 1, //Action row 1
        components: [
          {
            type: 4, //Text input for participant name
            style: 1,
            label: 'Nombre del participante',
            custom_id: 'participant-name',
            placeholder: 'Nombre del participante',
          },
        ],
      },
      {
        type: 1, //Action row 2
        components: [
          {
            type: 2, //Button 1 in action row 2
            style: 1,
            label: '+',
            custom_id: 'click-to-add',
            disabled: false,
          },
          {
            type: 2, //Button 2 in action row 2
            style: 1,
            label: "-",
            custom_id: 'click-to-substract',
            disabled: true,
          }
        ],
      },
    ],
  },
};