import "./App.css";
import groupPhoto from './assets/images/zb1.jpeg';

function App() {
  return (
    <div>
      <section id="section">
        <header>
          <nav>
          <h1>MyTunes</h1>
          </nav>
        </header>
        <main>
          <img src={groupPhoto} alt="zerobaseone group photo" width={300} height={300}/>
          <div>
          <h3>ZEROBASEONE Discography</h3>
            <table className="table">
              <details>
                <summary>YOUTH IN THE SHADE <span>&#43;</span></summary>
                <p>Back to ZEROBASE</p>
                <p>In Bloom</p>
                <p>New Kidz on the Block</p>
                <p>And I</p>
                <p>Our Season</p>
                <p>Always</p>
              </details>
            </table>
            <table className="table">
              <details>
                <summary>MELTING POINT <span>&#43;</span></summary>
                <p>MELTING POINT</p>
                <p>Take My Hand</p>
                <p>CRUSH</p>
                <p>And I</p>
                <p>Our Season</p>
                <p>Always</p>
              </details>
            </table>
            <table className="table">
              <details>
              <summary>ゆらゆら -運命の花 YURA YURA <span>&#43;</span></summary>
                <p>ゆらゆら -運命の花 YURA YURA</p>
                <p>In Bloom - Japanese Ver.</p>
                <p>Crush - Japanese Ver.</p>
              </details>
            </table>
            <table className="table">
              <details>
                <summary>You had me at HELLO <span>&#43;</span></summary>
                <p>Solar POWER</p>
                <p>Feel the POP</p>
                <p>Dear ECLIPSE</p>
                <p>SWEAT</p>
                <p>Sunday RIDE</p>
                <p>HELLO</p>
                <p>Feel the POP - Sped Up Version</p>
              </details>
            </table>
            <table className="table">
              <details>
                <summary>CINEMA PARADISE <span>&#43;</span></summary>
                <p>GOOD SO BAD</p>
                <p>KILL THE ROMEO</p>
                <p>The Sea - ZB1 Remake</p>
                <p>Insomia</p>
                <p>Road Movie</p>
                <p>Eternity</p>
                <p>YURA YURA - Korean Version</p>
              </details>
            </table>
          </div>
         </main>
      </section>
      <footer>
        
      </footer>
    </div>
  )
}

export default App
