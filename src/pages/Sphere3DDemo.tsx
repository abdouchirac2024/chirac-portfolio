import { Suspense } from "react"
import { Sphere3DGallery } from "@/components/Sphere3DGallery"

const Sphere3DDemo = () => {
    return (
        <div className="w-full h-screen bg-gradient-to-b from-gray-100 to-gray-200">
            <Suspense fallback={
                <div className="flex items-center justify-center h-full">
                    <div className="text-2xl font-semibold text-gray-600">
                        Chargement de la scène 3D...
                    </div>
                </div>
            }>
                <Sphere3DGallery />
            </Suspense>
        </div>
    )
}

export default Sphere3DDemo
