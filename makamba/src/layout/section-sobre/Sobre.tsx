import "./style/index.css";
import { ArrowUpRight } from "lucide-react"

export default function Sobre() {
  return (
    <div className="sobre" id="sobre">
      <div className="content">
        <div className="card">
          <div className="title">
            <h2>Sobre Nós</h2>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            officia quis quo mollitia ab eos veniam ipsa porro labore architecto
            earum incidunt harum unde, atque deserunt repudiandae dolor, ut
            eaque beatae eum sed ex dignissimos? Suscipit obcaecati dolorem
            facere quos?
          </p>

          <div className="button-float-card">
            <div className="button_float">
              <ArrowUpRight/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
