const { Schema, model } = requeri("mongoose")
const employeeSchema = new Schema (
{
    Id: { type: String, required: True },
    mis_tareas: { type: String, required: True },
    completado: { type: String, required: True },
    borrado: { type: String, required: True },
},
{
    timestamps: True,
    versionkey: false,
}
);

module.exports = model("employee", employeeSchema);