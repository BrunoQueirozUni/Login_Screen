import * as Checkbox from "@radix-ui/react-checkbox";
import { Check, EnvelopeSimple, LockKey } from "@phosphor-icons/react/dist/ssr";

export function Login() {
  return (
    <>
      <div className="w-screen h-screen bg-wallpaper bg-cover bg-center flex justify-center items-center">
        <form className="backdrop-blur-md w-[400px] h-[500px] flex flex-col justify-center text-white px-8">
          <h1 className="text-center font-bold text-2xl">Fazer Login</h1>
          <label className="bg-transparent border-b-2 p-2 mt-8 flex">
            <input
              type="text"
              placeholder="E-mail"
              className="bg-transparent p-1 outline-none w-full h-full"
            />
            <EnvelopeSimple size={32} />
          </label>
          <label className="bg-transparent border-b-2 p-2 mt-8 flex">
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent p-1 outline-none w-full h-full"
            />
            <LockKey size={32} />
          </label>
          <div className="w-full mt-8 flex justify-between text-sm">
            <label className="flex justify-center items-center select-none gap-2">
              <Checkbox.Root
                defaultChecked
                id="c1"
                className="h-[18px] w-[18px] border-2 flex items-center justify-center"
              >
                <Checkbox.Indicator>
                  <Check size={12} weight="bold" />
                </Checkbox.Indicator>
              </Checkbox.Root>
              Manter conectado
            </label>
            <a href="#" className="hover:underline text-purple-600 font-bold">Redefinir senha</a>
          </div>
          <button
            type="submit"
            className="border-2 mt-8 p-1 font-semibold transition hover:bg-white hover:text-black"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}
