import Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('items').insert([
    { image: 'lampadas.svg', title: 'Lâmpadas' },
    { image: 'baterias.svg', title: 'Pilhas e Baterias' },
    { image: 'papeis-papelao.svg', title: 'Papéis e Papelão' },
    { image: 'eletronicos.svg', title: 'Residuos Eletrônicos' },
    { image: 'organicos.svg', title: 'Residuos Orgânicos' },
    { image: 'oleo.svg', title: 'Óleo de Cozinha' },
  ]);
}
