import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { ImgCodeMockup } from "../components/ImgCodeMockup";
import { Logo } from "../components/Logo";

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscriber($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`;

export function Subcribe() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscriber] = useMutation(CREATE_SUBSCRIBER_MUTATION);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    createSubscriber({
        variables: {
            name,
            email,
        }
    })
}

  return (
    <div className="min-h-screen bg-blur bg bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight ">
            Semana da {" "}
            <strong className="text-blue-500 ">Computação</strong>, <br/>
            Unicap <strong className="text-blue-500">- 2022</strong>
          </h1>

          <p className="mt-4 text-gray-200 leading-relaxed">
          O evento compreende um conjunto de palestras e minicursos dirigidos aos alunos do Curso de Ciência da Computação que terá como tema Carreiras de TI. Você é o nosso convidado especial para fazer parte deste evento! Inscreva-se e garanta a sua presença!
          </p>
        </div>

        <div>
          <div className="p-8 bg bg-gray-700 border border-gray-500 rounded">
            <strong className="text-2xl mb-6 block">
              {" "}
              Inscreva-se gratuitamente
            </strong>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-2 w-full"
            >
              <input
                className="bg bg-gray-900 rounded px-5 h-14"
                type="text"
                placeholder="Seu nome completo"
                onChange={(event) => setName(event.target.value)}
              />
              <input
                className="bg bg-gray-900 rounded px-5 h-14"
                type="email"
                placeholder="Digite seu e-mail"
                onChange={(event) => setEmail(event.target.value)}
              />

              <button
                type="submit"
                className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
              >
                Garantir minha vaga
              </button>
            </form>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
