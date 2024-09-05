import ProductsList from "../../components/ProductsList"
import Game from "../../models/Game"
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes:Game[] = [
  {
    id: 1,
    category: 'Ação',
    description: 'Resident Evil 4 é um marco na franquia Resident Evil e no gênero survival horror como um todo. Lançado originalmente em 2005 e reimaginado em 2023, o jogo acompanha Leon S. Kennedy, agora um agente especial, em uma missão para resgatar a filha do presidente dos Estados Unidos, sequestrada por um culto misterioso em uma remota vila espanhola.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident,
  },
  {
    id: 2,
    category: 'Ação',
    description: 'Resident Evil 4 é um marco na franquia Resident Evil e no gênero survival horror como um todo. Lançado originalmente em 2005 e reimaginado em 2023, o jogo acompanha Leon S. Kennedy, agora um agente especial, em uma missão para resgatar a filha do presidente dos Estados Unidos, sequestrada por um culto misterioso em uma remota vila espanhola.',
    title: 'Diablo',
    system: 'PS5',
    infos: ['5%', 'R$ 290,00'],
    image: diablo,
  },
  {
    id: 3,
    category: 'Ação',
    description: 'Resident Evil 4 é um marco na franquia Resident Evil e no gênero survival horror como um todo. Lançado originalmente em 2005 e reimaginado em 2023, o jogo acompanha Leon S. Kennedy, agora um agente especial, em uma missão para resgatar a filha do presidente dos Estados Unidos, sequestrada por um culto misterioso em uma remota vila espanhola.',
    title: 'Zelda',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: zelda,
  },
  {
    id: 4,
    category: 'Ação',
    description: 'Resident Evil 4 é um marco na franquia Resident Evil e no gênero survival horror como um todo. Lançado originalmente em 2005 e reimaginado em 2023, o jogo acompanha Leon S. Kennedy, agora um agente especial, em uma missão para resgatar a filha do presidente dos Estados Unidos, sequestrada por um culto misterioso em uma remota vila espanhola.',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: starWars,
  },
]

const emBreve:Game[] = [
  {
    id: 5,
    category: 'Ação',
    description: 'Resident Evil 4 é um marco na franquia Resident Evil e no gênero survival horror como um todo. Lançado originalmente em 2005 e reimaginado em 2023, o jogo acompanha Leon S. Kennedy, agora um agente especial, em uma missão para resgatar a filha do presidente dos Estados Unidos, sequestrada por um culto misterioso em uma remota vila espanhola.',
    title: 'Diablo',
    system: 'PS5',
    infos: ['18/05'],
    image: diablo,
  },
  {
    id: 6,
    category: 'Ação',
    description: 'Resident Evil 4 é um marco na franquia Resident Evil e no gênero survival horror como um todo. Lançado originalmente em 2005 e reimaginado em 2023, o jogo acompanha Leon S. Kennedy, agora um agente especial, em uma missão para resgatar a filha do presidente dos Estados Unidos, sequestrada por um culto misterioso em uma remota vila espanhola.',
    title: 'Diablo',
    system: 'PS5',
    infos: ['18/05'],
    image: diablo,
  },
  {
    id: 7,
    category: 'Ação',
    description: 'Resident Evil 4 é um marco na franquia Resident Evil e no gênero survival horror como um todo. Lançado originalmente em 2005 e reimaginado em 2023, o jogo acompanha Leon S. Kennedy, agora um agente especial, em uma missão para resgatar a filha do presidente dos Estados Unidos, sequestrada por um culto misterioso em uma remota vila espanhola.',
    title: 'Diablo',
    system: 'PS5',
    infos: ['18/05'],
    image: diablo,
  },
  {
    id: 8,
    category: 'Ação',
    description: 'Resident Evil 4 é um marco na franquia Resident Evil e no gênero survival horror como um todo. Lançado originalmente em 2005 e reimaginado em 2023, o jogo acompanha Leon S. Kennedy, agora um agente especial, em uma missão para resgatar a filha do presidente dos Estados Unidos, sequestrada por um culto misterioso em uma remota vila espanhola.',
    title: 'Diablo',
    system: 'PS5',
    infos: ['18/05'],
    image: diablo,
  },
]

const Categories = () => (
  <>
    <ProductsList games={promocoes} title='RPG' background='gray' />
    <ProductsList games={emBreve} title='Ação' background='black' />
    <ProductsList games={promocoes} title='Aventura' background='gray' />
    <ProductsList games={emBreve} title='FPS' background='black' />
  </>
)

export default Categories