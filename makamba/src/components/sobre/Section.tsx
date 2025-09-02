type SectionProps = {
  id: string
  title: string
  content?: string
  children?: React.ReactNode
}
/*{*Formatação dos Titulos*}*/
const Section = ({ title}: SectionProps) => (
    <div className="mt-20">
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    </div>
)

export default Section
