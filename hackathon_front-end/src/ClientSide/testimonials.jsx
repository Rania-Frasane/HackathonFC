import { CardContent, Card } from "@/components/ui/card"

export default function Testimonials() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container max-w-6xl px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
                        <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Hear from our satisfied customers about their experience with our products and services.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-14">
                    <Card>
                        <CardContent className="space-y-4">
                            <blockquote className="text-lg font-semibold leading-snug">
                                “The customer service I received was exceptional. The support team went above and beyond to address my
                                concerns.”
                            </blockquote>
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <img
                                        alt="Customer Avatar"
                                        className="rounded-full"
                                        height={48}
                                        src="/placeholder.svg"
                                        style={{
                                            aspectRatio: "48/48",
                                            objectFit: "cover",
                                        }}
                                        width={48}
                                    />
                                </div>
                                <div>
                                    <div className="font-semibold">Jules Winnfield</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">CEO, Acme Inc</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="space-y-4">
                            <blockquote className="text-lg font-semibold leading-snug">
                                “I was hesitant at first, but after using the product, I was blown away by its capabilities. It has
                                transformed the way we operate.”
                            </blockquote>
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <img
                                        alt="Customer Avatar"
                                        className="rounded-full"
                                        height={48}
                                        src="/placeholder.svg"
                                        style={{
                                            aspectRatio: "48/48",
                                            objectFit: "cover",
                                        }}
                                        width={48}
                                    />
                                </div>
                                <div>
                                    <div className="font-semibold">Mia Wallace</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">Head of Marketing, Big Corp</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="space-y-4">
                            <blockquote className="text-lg font-semibold leading-snug">
                                “I was impressed by the attention to detail and the user-friendly interface. It has made our workflow so
                                much more efficient.”
                            </blockquote>
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <img
                                        alt="Customer Avatar"
                                        className="rounded-full"
                                        height={48}
                                        src="/placeholder.svg"
                                        style={{
                                            aspectRatio: "48/48",
                                            objectFit: "cover",
                                        }}
                                        width={48}
                                    />
                                </div>
                                <div>
                                    <div className="font-semibold">Vincent Vega</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">Product Manager, Globex Corp</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}