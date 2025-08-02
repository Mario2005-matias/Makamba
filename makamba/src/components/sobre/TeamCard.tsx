type TeamCardProps = {
  name: string
  role: string
  imgSrc: string
}

const TeamCard = ({ name, role, imgSrc }: TeamCardProps) => (
  <div className="bg-gray-100 p-4 rounded shadow">
    <img src={imgSrc} alt={`Foto de ${name}`} className="w-full h-48 object-cover rounded" />
    <h3 className="mt-2 font-bold">{name}</h3>
    <p className="text-sm">{role}</p>
  </div>
)

export default TeamCard
