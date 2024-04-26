import Badge from "components/atoms/badge"
import { CardTitle, Paragraph } from "components/atoms/text"

export function Card({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="flex max-w-96 flex-col items-center justify-center p-2 sm:max-w-64 sm:items-start">
      <div className="my-5">
        <Badge icon={icon} />
      </div>
      <div className="mb-3">
        <CardTitle title={title} />
      </div>
      <div>
        <Paragraph text={text} />
      </div>
    </div>
  )
}
