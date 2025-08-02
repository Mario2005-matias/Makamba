type PartnerCardProps = {
  name: string
  imgSrc: string
}

let PartnerCard = ({ name, imgSrc }: PartnerCardProps) => (
  <div className="flex items-center gap-2 bg-white dark:bg-gray-700 p-3 rounded shadow">
    <img src={imgSrc} alt={name} className="h-10" />
    <span>{name}</span>
  </div>
)

export default PartnerCard
