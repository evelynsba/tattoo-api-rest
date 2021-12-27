'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Agendamentos', [
      {			
				status: 1,
        servico_id:4,
        user_id: 1,
        tatuador_id: "4",
				data: new Date(),
        createdAt: new Date(),
				updatedAt: new Date()
			}
  ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Agendamentos', null, {}); 
  
  }
};
