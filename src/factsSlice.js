import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const initialState = {
  selectedFacts: [],
  facts: [
    { id: uuid(), text:'Прообразом Чубакки стал пёс режиссёра', },
    { id: uuid(), text:'Актёрам разрешили подобрать любимый цвет для своих световых мечей', },
    { id: uuid(), text:'В фильме «Звёздные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину', },
    { id: uuid(), text:'Дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к аквалангу', },
    { id: uuid(), text:'Планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок', },
  ]
};

const factsSlice = createSlice({
  name: '@@starWars',
  initialState,
  reducers: {
    selectFact(state, action) {
      const numFacts = action.payload > 5 ? 5 : action.payload < 0 ? 0 : action.payload;
      const newFacts = state.facts.slice(0, numFacts);
      state.selectedFacts = newFacts;
    },
  },
});

export const { selectFact } = factsSlice.actions;

export default factsSlice.reducer;
