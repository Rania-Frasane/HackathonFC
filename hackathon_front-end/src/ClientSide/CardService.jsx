import { Button } from "@/components/ui/button"

export default function CardService() {
    return (
        <div className="rounded-lg overflow-hidden shadow-lg">
            <img alt="Service 2" className="w-full h-48 object-cover"
                height="200" src="/placeholder.svg"
                style={{ aspectRatio: "300/200", objectFit: "cover", }} width="300" />
            <div className="p-6 bg-white dark:bg-gray-950">
                <h3 className="text-xl font-bold mb-2">Service 2</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies tincidunt, nisl
                    nisl aliquam nisl, eget aliquam nisl nisl eget nisl.
                </p>
                <Button className="bg-primary text-white hover:bg-primary/90 focus:ring-primary">Consult</Button>
            </div>
        </div>
    )
}