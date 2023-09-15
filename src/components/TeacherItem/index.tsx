import whatsapIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

export function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://scontent-gru2-2.xx.fbcdn.net/v/t39.30808-6/359739213_1043716233261879_7261580292024636804_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeHFfkh1K0UKrjdMn5S7AamuJFIfcnABAiIkUh9ycAECIgNhGbmLItFnnCA1oiP8sjL4v82ceTOnn7n5fEbfCpoR&_nc_ohc=L-gmNsskPRsAX9oLD1z&_nc_ht=scontent-gru2-2.xx&oh=00_AfD9SXyeN-_JewuaJdaumV-5pS5kA3GYmHJzxkL9df7FEw&oe=650974B1"
          alt="Thauane Bispo"
        />
        <div>
          <strong>Thauane Bispo</strong>
          <span>Matemática</span>
        </div>
      </header>
      <p>
        Aulas diveridas, matematica ensinada de uma maneira totalmente nova.
        <br />
        <br />
        Venha aprender comigo e se apaixonar pela matemática.
      </p>
      <button></button>
      <footer>
        <p>
          Preço/hora
          <strong>R$: 70,00</strong>
        </p>
        <button type="button">
          <img src={whatsapIcon} alt="whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}
