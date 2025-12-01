import { Button } from './ui/button'

type Variant = 'primary' | 'secondary' | 'tertiary'

const OutlinedButton = ({ children, variant= 'primary', href }: { children: React.ReactNode, variant?: Variant, href?: string }) => {
    const styles: Record<Variant, React.CSSProperties> = {
        primary: { borderColor: '#56E39F', color: '#56E39F' },
        secondary: { borderColor: '#F7EE7F', color: '#F7EE7F' },
        tertiary: { borderColor: 'var(--text-2)', color: 'var(--text-2)' },
    };

    const hoverColors: Record<Variant, { bg: string; text: string }> = {
        primary: { bg: '#56E39F', text: 'var(--bg-1)' },
        secondary: { bg: '#F7EE7F', text: 'var(--bg-3)' },
        tertiary: { bg: 'var(--text-2)', text: 'var(--bg-1)' },
    };

    const sharedProps = {
        size: 'lg' as const,
        variant: 'outline' as const,
        className: 'border-2 group uppercase transition-colors',
        style: { ...styles[variant], borderWidth: '2px' },
        onMouseEnter: (e: any) => {
            e.currentTarget.style.backgroundColor = hoverColors[variant].bg;
            e.currentTarget.style.color = hoverColors[variant].text;
        },
        onMouseLeave: (e: any) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = styles[variant].color as string;
        },
    }

    if (href) {
        return (
            <Button asChild {...sharedProps}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                    {children}
                </a>
            </Button>
        )
    }

    return (
        <Button {...sharedProps}>
            {children}
        </Button>
    )
}

const RaisedButton = ({ children, href }: { children: React.ReactNode, href?: string }) => {
    const sharedStyle: React.CSSProperties = {
        backgroundColor: 'var(--text-1)',
        color: 'var(--bg-3)',
        borderWidth: '2px',
        borderColor: 'var(--text-1)',
    }

    const sharedProps = {
        size: 'lg' as const,
        className: 'group uppercase transition-colors',
        style: sharedStyle,
        onMouseEnter: (e: any) => {
            e.currentTarget.style.backgroundColor = 'var(--text-4)';
            e.currentTarget.style.borderColor = 'var(--text-4)';
        },
        onMouseLeave: (e: any) => {
            e.currentTarget.style.backgroundColor = 'var(--text-1)';
            e.currentTarget.style.borderColor = 'var(--text-1)';
        },
    }

    if (href) {
        return (
            <Button asChild {...sharedProps}>
                <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
            </Button>
        )
    }

    return (
        <Button {...sharedProps}>
            {children}
        </Button>
    )
}

export {
    OutlinedButton,
    RaisedButton,
}