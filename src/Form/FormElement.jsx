/* eslint-disable react/prop-types */
import React from "react";

const ShowErrors = ({ errors }) => {
  return (
    <ul style={{ color: "red" }}>
        {
            errors.map ((error, i) => <li style={{backgroundColor: 'white'}} key={i}>{error}</li>
            )
        }
    </ul>
  );
};

const inputStyle = {
  width: "200px",
  backgroundColor: "white",
};

const white = {
  backgroundColor: "white",
};

const button = {
  width: "400px",
  padding: "5px 10px",
  backgroundColor: "#333",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
};

const form = {
  width: "400px",
  border: "1px solid black",
  padding: "20px",
  backgroundColor: "white",
};

const gap = {
  width: "120px",
  padding: "10px 10px 0px 0px",
  backgroundColor: "white",
};

export default class FormElement extends React.Component {
  state = {
    nama: "",
    jurusan: "",
    gender: "",
    alamat: "",
    email: "",
    username: "",
    password: "",
    confirm: false,
    errors: [],
  };

  handleSubmit = (e) => {
    alert(`
    nama: ${this.state.nama}
    jurusan: ${this.state.jurusan}
    jenis kelamin: ${this.state.gender}
    alamat: ${this.state.alamat}
    email: ${this.state.email}
    username: ${this.state.username}
    password: ${this.state.password}
    konfirmasi: ${this.state.confirm ? "Yes" : "No"}
    `);

    e.preventDefault();

    this.setState({
      nama: "",
      alamat: "",
      email: "",
      username: "",
      password: "",
    });

    const { email, password } = this.state;

    let message = [];

    if (email.length === 0) {
      message = [...message, "Email tidak boleh kosong"];
    }

    if (password.length === 0) {
      message = [...message, "Password tidak boleh kosong"];
    }

    if (password.length < 8) {
      message = [...message, "Password minimal 8 karakter"];
    }

    if (message.length > 0) {
      this.setState({
        errors: message,
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <table style={form}>
          <tbody>
            {
                this.state.errors && <ShowErrors errors={this.state.errors}/>
            }
            <tr>
              <td style={gap}>Nama Lengkap : </td>
              <td style={white}>
                <input
                  style={inputStyle}
                  type="text"
                  name="nama"
                  onChange={(e) => this.setState({ nama: e.target.value })}
                  value={this.state.nama}
                />
              </td>
            </tr>
            <tr>
              <td style={gap}>Jurusan : </td>
              <td style={white}>
                <select
                  style={inputStyle}
                  name="jurusan"
                  onChange={(e) => this.setState({ jurusan: e.target.value })}
                  defaultChecked={"Pilih Jurusan"}
                >
                  <option value="">Pilih Jurusan</option>
                  <option value="Agroekoteknologi">Agroekoteknologi</option>
                  <option value="Ilmu Kelautan">Ilmu Kelautan</option>
                  <option value="Sistem Informasi">Sistem Informasi</option>
                </select>
              </td>
            </tr>
            <tr>
              <td style={gap}>Jenis Kelamin : </td>
              <td style={white}>
                <input
                  type="radio"
                  value="Laki-laki"
                  name="gender"
                  onChange={(e) => this.setState({ gender: e.target.value })}
                />{" "}
                Laki-laki
                <input
                  type="radio"
                  value="Perempuan"
                  name="gender"
                  style={{ marginLeft: "20px" }}
                  onChange={(e) => this.setState({ gender: e.target.value })}
                />{" "}
                Perempuan
              </td>
            </tr>
            <tr>
              <td style={gap}>Alamat : </td>
              <td style={white}>
                <textarea
                  style={inputStyle}
                  name="alamat"
                  cols="30"
                  rows="10"
                  onChange={(e) => this.setState({ alamat: e.target.value })}
                  value={this.state.alamat}
                ></textarea>
              </td>
            </tr>
            <tr>
              <td style={gap}>Email : </td>
              <td style={white}>
                <input
                  style={inputStyle}
                  type="email"
                  name="email"
                  onChange={(e) => this.setState({ email: e.target.value })}
                  value={this.state.email}
                />
              </td>
            </tr>
            <tr>
              <td style={gap}>Username : </td>
              <td style={white}>
                <input
                  style={inputStyle}
                  type="text"
                  name="username"
                  onChange={(e) => this.setState({ username: e.target.value })}
                  value={this.state.username}
                />
              </td>
            </tr>
            <tr>
              <td style={gap}>Password :</td>
              <td style={white}>
                <input
                  style={inputStyle}
                  type="password"
                  name="password"
                  onChange={(e) => this.setState({ password: e.target.value })}
                  value={this.state.password}
                />
              </td>
            </tr>
            <tr>
              <td style={white}></td>
              <td style={white}>
                <input
                  type="checkbox"
                  value={true}
                  name="confirm"
                  checked={this.state.confirm}
                  onChange={(e) => this.setState({ confirm: e.target.checked })}
                  defaultChecked
                />{" "}
                Dengan ini anda dianggap setuju mematuhi semua kebijakan kami
              </td>
            </tr>
          </tbody>
        </table>
        <button style={button} type="submit">
          Submit
        </button>
      </form>
    );
  }
}
