import Section from "../../components/Section"
import zelda from '../../assets/images/banner-homem-aranha.png'
import {Item,Items} from './styles'

const Galley = () => (
  <Section title="Galeria" background="black">
          <Items>
            <Item>
              <img src={zelda} alt="zelda" />
            </Item>
            <Item>
              <img src={zelda} alt="zelda" />
            </Item>
            <Item>
              <img src={zelda} alt="zelda" />
            </Item>
            <Item>
              <img src={zelda} alt="zelda" />
            </Item>
          </Items>
        </Section>
)

export default Galley