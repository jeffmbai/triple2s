# Animated Button Component Documentation

## Overview
The AnimatedButton is a highly customizable React component that creates an interactive circular button with hover animations, rotating text, and a morphing arrow icon. It supports multiple variants, sizes, and can be customized through props.

## Features
- Smooth hover animations with center-fill effect
- Rotating circular text that appears on hover
- Morphing arrow icon (white to black)
- Two variants: filled and bordered
- Responsive sizing with mobile and desktop breakpoints
- TypeScript support
- Tailwind CSS styling

## Installation Prerequisites
1. Next.js project with TypeScript
2. Tailwind CSS configured
3. Required Tailwind configuration for animations:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      },
    },
  },
}
```

## Usage

### Basic Implementation
```typescript
import AnimatedButton from '@/components/AnimatedButton';

// Default usage (filled variant)
<AnimatedButton />

// Bordered variant
<AnimatedButton variant="bordered" />

// Custom size
<AnimatedButton size="md" />

// Custom text
<AnimatedButton rotatingText="CONTACT US " repeatCount={2} />
```

### Props
| Prop         | Type                   | Default        | Description                     |
| ------------ | ---------------------- | -------------- | ------------------------------- |
| size         | "sm" \| "md" \| "lg"   | "lg"           | Controls button size            |
| className    | string                 | ""             | Additional CSS classes          |
| rotatingText | string                 | "BOOK A CALL " | Text that rotates around button |
| repeatCount  | number                 | 3              | Number of times text repeats    |
| hidden       | boolean                | true           | Controls lg:hidden behavior     |
| variant      | "filled" \| "bordered" | "filled"       | Button style variant            |

### Size Breakpoints
- Small (sm): 5rem (80px)
- Medium (md): 6rem mobile, 8rem desktop
- Large (lg): 6rem mobile, 10rem desktop

## Animation Details
1. Hover Fill Effect
   - Expands from center point
   - Uses custom cubic-bezier timing
   - Duration: 700ms

2. Text Rotation
   - Continuous rotation (12 seconds per revolution)
   - Appears with fade transition on hover
   - Uses SVG textPath for circular text

3. Arrow Transition
   - Color shifts from white to black
   - Maintains position during background fill
   - Smooth opacity transition

## Best Practices
1. Use descriptive text that fits the circle well
2. Maintain adequate spacing in rotating text
3. Consider mobile vs desktop visibility
4. Match variant to design context

## Examples

### Hero Section Button
```typescript
<AnimatedButton 
  size="lg"
  className="mt-8"
  rotatingText="LEARN MORE "
/>
```

### Contact Form Button
```typescript
<AnimatedButton 
  variant="bordered"
  size="md"
  rotatingText="SEND MESSAGE "
  hidden={false}
/>
```

### Navigation Button
```typescript
<AnimatedButton 
  size="sm"
  className="fixed top-4 right-4"
  rotatingText="MENU "
  repeatCount={4}
/>
```

## Accessibility
- Maintains focus states
- Supports keyboard navigation
- Preserves button semantics
- Works with screen readers

## Browser Support
- Modern browsers with CSS transform support
- SVG animation support required
- Fallback to static state in older browsers

## Performance Considerations
- Uses CSS transforms for smooth animations
- Optimized SVG paths
- Efficient Tailwind class usage
- Minimal JavaScript usage