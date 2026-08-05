import ButtonLink from "../components/ui/ButtonLink";

export default function NotFoundPage() {
  return (
    <main className="not-found">
      <div className="page-width not-found__content">
        <span>404</span>
        <h1>Esta página no existe</h1>
        <p>Puede que el enlace haya cambiado o que la dirección esté incompleta.</p>
        <ButtonLink to="/" variant="light">Volver al inicio</ButtonLink>
      </div>
    </main>
  );
}
