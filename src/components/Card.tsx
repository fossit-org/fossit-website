import { Card, CardHeader, CardContent, CardTitle } from './ui/card';


const VerticalCard = ({children, icon, heading} : {children: React.ReactNode, icon: React.ReactNode, heading: React.ReactNode}) => {
    return (
        <Card className="border-none hover:scale-105 hover:-translate-y-2 transition-all group bg-[#031A26]">
            <CardHeader className='text-[#B3DEC1] text-center'>
                <div className="rounded-xl p-3 w-fit mx-auto">
                    {icon}
                </div>
                <CardTitle className="text-xl md:text-2xl">
                    {heading}
                </CardTitle>
            </CardHeader>
            <CardContent className='text-[#DBF9F0]'>
                {children}
            </CardContent>
        </Card>
    )
}

const HorizontalCard = ({children, icon, heading} : {children: React.ReactNode, heading: React.ReactNode, icon: React.ReactNode}) => {
    return (
        <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0B2332]">
            <div className="text-[#59A5D8] p-3 rounded-xl shrink-0">
                {icon}
            </div>
            <div>
                <h4 className="text-base md:text-lg text-[#59A5D8] mb-2">
                    {heading}
                </h4>
                <p className="text-[#91E5F6]">
                    {children}
                </p>
            </div>
        </div>
    )
}

export {
    VerticalCard,
    HorizontalCard
}