'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReportsSchema extends Schema {
  up () {
    this.create('reports', (table) => {
      table.increments()
      table.string('numerodeproyecto', 100)
      table.string('algo', 100)
      table.string('numerodedocumento', 100)
      table.string('num', 100)
      table.string('ed', 100)
      table.string('cliente', 100)
      table.string('cif', 100)
      table.string('dirrecion', 100)
      table.string('codigopostal', 100)
      table.string('poblacion', 100)
      table.string('provincia', 100)
      table.string('telefono', 100)
      table.string('tecnico', 100)
      table.string('trabajosrealizados', 100)

      table.string('dia')
      table.string('fecha')
      table.string('horasentrada')
      table.string('horassalida')
      table.string('horasservicio')
      table.string('horasviaje')
      table.string('km')
      table.string('comida')
      table.string('percrocta')

      table.string('cantidad')
      table.string('descripcion')
      table.timestamps()
    })
  }

  down () {
    this.drop('reports')
  }
}

module.exports = ReportsSchema
