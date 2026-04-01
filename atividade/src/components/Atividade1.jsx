import { useState } from "react";
function Atividade1() {
 const [form, setForm] = useState({
 nome: "",
 email: ""
 });
 function handleChange(e) {
 const { name, value } = e.target;
 setForm({
 ...form,
 [name]: value
 });
 }
 function handleSubmit(e) {
 e.preventDefault();
 console.log(form);
 }
 return (
 <form onSubmit={handleSubmit}>
 <input
 name="nome"
 placeholder="Nome"
 value={form.nome}
 onChange={handleChange}
 />
 <input
 name="email"
 placeholder="Email"
 value={form.email}
 onChange={handleChange}
 />
 <button type="submit">Enviar</button>
 </form>
 );
}
export default Atividade1