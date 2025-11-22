import { Button } from './ui/button';

const OutlinedButton = ({ children }: { children: React.ReactNode }) => {
    return (
        <Button size="lg" variant="outline" className="border-2 border-[var(--text-4)] text-[var(--text-4)] hover:bg-[var(--text-4)] hover:text-[var(--bg-1)] group">
            {children}
        </Button>
    )
}

export {
    OutlinedButton,
}