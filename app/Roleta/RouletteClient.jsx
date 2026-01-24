"use client";

export default function RouletteClient() {
  return (
    <div className="container">
      <div className="card">
        <div className="row">
          <div className="col">
            <h2>Roue des cadeaux</h2>

            <p>
              1) Laissez votre avis sur Google ou suivez-nous sur Instagram
              <br />
              2) Envoyez la capture d’écran de l’avis ou de votre suivi
              <br />
              3) Tournez la roue et recevez un code
            </p>

            <div className="row" style={{ alignItems: "center", gap: 12 }}>
              <a className="btn" href="#" onClick={(e) => e.preventDefault()}>
                Donner un avis sur Google
              </a>
              <a className="btn" href="#" onClick={(e) => e.preventDefault()}>
                Suivez-nous sur Instagram
              </a>
              <span className="small">(s’ouvre dans un nouvel onglet)</span>
            </div>

            <div className="hr" />

            <label className="small">
              Télécharger la capture d’écran de votre avis ou de votre suivi
            </label>
            <input className="input" type="file" accept="image/*" />
          </div>

          <div className="col">
            <h3 style={{ marginTop: 0 }}>La roue</h3>
            <div
              style={{
                height: 320,
                borderRadius: 18,
                border: "1px dashed rgba(0,0,0,.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              (image de la roue ici)
            </div>

            <div style={{ marginTop: 12, textAlign: "center" }}>
              <button className="btn" type="button">
                Tourner!
              </button>
            </div>

            <div className="small" style={{ textAlign: "center", marginTop: 10 }}>
              Passez une nouvelle commande pour rejouer.
            </div>
          </div>
        </div>

        <div className="small" style={{ textAlign: "center", marginTop: 16 }}>
          Conservez votre code ou faites une capture d’écran.
        </div>
      </div>
    </div>
  );
}
