

## Fix Nav Text Visibility on Dark Hero Backgrounds

The nav links currently use `text-foreground/80` which is dark text — invisible against the black hero background when not scrolled.

**Problem**: `text-foreground` resolves to near-black (`0 0% 4%`), so `/80` opacity is still dark.

**Solution**: The nav needs to be white/light when over dark heroes (not scrolled) and dark when scrolled (white background). Two approaches:

1. **Simple approach**: Change nav text to white when not scrolled, dark when scrolled — using the existing `isScrolled` state.
2. **Static approach**: Just use `text-foreground/60` as requested (but this won't help on dark backgrounds either since foreground is black).

Since the user wants visibility on black hero backgrounds, I'll make the nav text **conditional on scroll state**:
- **Not scrolled (over hero)**: `text-white/90` with `hover:text-primary`
- **Scrolled (white bg)**: `text-foreground/80` with `hover:text-primary`

**File**: `src/components/layout/Header.tsx`

**Changes**:
- Add a dynamic text color class based on `isScrolled`
- Apply to: dropdown button (line 69), Link elements (line 79), anchor elements (line 86)
- Also update the logo text and "School of Strategy" subtitle colors
- Update the mobile menu hamburger icon color

