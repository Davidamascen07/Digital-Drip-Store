import { NavLink } from "react-router-dom";
import img from "../../assets/image/White-Sneakers-PNG-Clipart 2.png";

export default function ConteudoCompraRealizada() {
  return (
    <div className="bg-Branco relative pl-[23%] mt-[5%] h-fit w-fit">
      <section className="h-fit">
        <div className="text-[150px] md:text-[200px] relative flex justify-center md:flex-shrink-0">
          🎉
        </div>
        <div className="flex justify-center font-bold">
          <div className="text-[46px] relative left-[130px] font-bold">Compra Realizada</div>
          <div className="text-[46px] relative top-[70px] right-[220px] font-bold">
            com sucesso!
          </div>
        </div>
        <hr className="text-Cinza-Branco w-[100%] ml-[5%] mt-[10%] font-extrabold" />
        <div className="ml-[5%]">
          <h1 className="text-Cinza-Escuro2 font-semibold ml-[%] mt-[2%]">Informações Pessoais</h1>
          <p className="flex">Nome: Ricardo Silva</p>
          <p className="flex">CPF: 123.456.789-00</p>
          <p className="flex">E-mail: ricardo.silva@gmail.com</p>
          <p className="flex">Celular: (85) 98765-4321</p>
        </div>
        <hr className="text-Cinza-Branco flex w-full ml-[5%] mt-[2%] font-extrabold" />
        <div className="ml-[5%]">
          <h1 className="text-Cinza-Escuro2 font-semibold ml-[%] mt-[2%]">Informações de Entrega</h1>
          <p className="flex">Endereço: Rua das Flores, 123</p>
          <p className="flex">Bairro: Jardim</p>
          <p className="flex">Cidade: Fortaleza, Ceará</p>
          <p className="flex">CEP: 60000-000</p>
        </div>
        <hr className="text-Cinza-Branco flex justify-center w-full mt-[2%] ml-[5%] font-extrabold" />
        <div className="ml-[5%]">
          <h1 className="text-Cinza-Escuro2 font-semibold ml-[%] mt-[2%]">Informações de pagamento</h1>
          <p className="flex">Titular do Cartão: Ricardo Silva</p>
          <p className="flex">Final: ***********2023</p>
        </div>
        <hr className="text-Cinza-Branco flex justify-center w-full mt-[2%] ml-[5%] font-extrabold" />
        <h1 className="text-Cinza-Escuro2 font-semibold ml-[5%] mt-[2%]">Resumo da compra</h1>
        <div className="flex ml-[5%] mt-[4%] gap-4">
          <img
            src={img}
            className="w-[71.17px] h-[58px] shrink-0 rounded-[2.6px] bg-Lilás"
            alt="Tênis Nike"
          />
          <h1 className="text-Cinza-Escuro text-[20px] font-bold">
            Tênis Nike Revolution 6 Next <br /> Nature Masculino
          </h1>
        </div>
        <div className="flex gap-[57%] mt-[5%] ml-[5%] pl-[1%] justify-start bg-[#F6AA1C26] min-w-full ring-4 ring-[#f6aa1c4b] rounded">
          <p className="text-[30px] relative font-bold">Total</p>
          <div className="grid">
            <p className="text-[30px] font-bold flex justify-end relative">R$ 219,00</p>
            <p className="flex text-[#8F8F8F] justify-end relative">
              ou 10x de R$ 21,00 sem juros
            </p>
          </div>
        </div>
        <p className="text-Cinza-light2 underline decoration-1 relative flex justify-center pl-[10%] py-[5%] cursor-pointer">
          Imprimir Recibo
        </p>
        <NavLink to={'/'} className={({ isActive }) => (isActive ? '' : '')}>
          <button className="bg-Amarelo text-Branco mb-[12%] z-20 w-full ml-[5%] h-[48px] relative text-[16px] not-italic font-bold leading-[24px] tracking-[0.75px] text-center rounded-[11px] hover:text-Branco hover:duration-500 hover:ease-in-out duration-[1.4s]">
            Voltar para Home
          </button>
        </NavLink>
      </section>
    </div>
  );
}
