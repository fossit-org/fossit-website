import { Button } from './ui/button'

const OutlinedButton = ({ children, variant= 'primary' }: { children: React.ReactNode, variant?: 'primary' | 'secondary' | 'tertiary' }) => {
    const styles: Record<string, React.CSSProperties> = {
        primary: {
            borderColor: '#D0FCB3',
            color: '#D0FCB3',
        },
        secondary: {
            borderColor: '#F9FBB2',
            color: '#F9FBB2',
        },
        tertiary: {
            borderColor: 'var(--text-2)',
            color: 'var(--text-2)',
        }
    };

    const hoverColors: Record<string, { bg: string; text: string }> = {
        primary: { bg: '#D0FCB3', text: 'var(--bg-1)' },
        secondary: { bg: '#F9FBB2', text: 'var(--bg-3)' },
        tertiary: { bg: 'var(--text-2)', text: 'var(--bg-1)' },
    };

    return (
        <Button 
            size="lg" 
            variant="outline" 
            className="border-2 group uppercase transition-colors"
            style={{
                ...styles[variant],
                borderWidth: '2px',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = hoverColors[variant].bg;
                e.currentTarget.style.color = hoverColors[variant].text;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = styles[variant].color as string;
            }}
        >
            {children}
        </Button>
    )
}

const RaisedButton = ({ children }: { children: React.ReactNode }) => {
    return (
        <Button 
            size="lg" 
            className="group uppercase transition-colors"
            style={{
                backgroundColor: 'var(--text-1)',
                color: 'var(--bg-3)',
                borderWidth: '2px',
                borderColor: 'var(--text-1)',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--text-4)';
                e.currentTarget.style.borderColor = 'var(--text-4)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--text-1)';
                e.currentTarget.style.borderColor = 'var(--text-1)';
            }}
        >
            {children}
        </Button>
    )
}

export {
    OutlinedButton,
    RaisedButton,
}