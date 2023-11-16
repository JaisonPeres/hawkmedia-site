import Button from "@/components/basic/button/Button";

export default function SiteNotFound() {
  return (
    <div className="flex-col items-center justify-between lg:p-24 pt-24">
      <div>
        <h1 className="text-4xl text-white text-center">Este site parece não estar registrado</h1>
        <p className="mt-3.5 text-2xl text-white text-center">
          Caso este site tenha sido registrado e ainda não apareça aqui,
          entre em contato com nossa equipe de suporte.
        </p>

        <div className="mt-5 text-center">
          <Button href="mail:suporte@onbloc.dev.br" className="bg-indigo-600" label="suporte@onbloc.dev.br" />
        </div>
      </div>
    </div>
  )
}