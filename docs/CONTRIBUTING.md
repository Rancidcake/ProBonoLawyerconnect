# Contributing to Sahay

Thank you for considering contributing to Sahay! This document provides guidelines and instructions for contributing to the project.

## Development Guidelines

### Code Style

1. **TypeScript**
   - Use TypeScript for all new code
   - Maintain strict type safety
   - Avoid using `any` type

2. **Component Structure**
   - One component per file
   - Use functional components with hooks
   - Implement proper prop typing
   - Extract reusable logic into custom hooks

3. **Naming Conventions**
   - Components: PascalCase
   - Files: PascalCase for components, camelCase for utilities
   - Variables and functions: camelCase
   - Constants: UPPER_SNAKE_CASE

4. **File Organization**
   - Keep files small and focused
   - Group related files in appropriate directories
   - Use index files for cleaner imports

### Bilingual Support

1. **Text Content**
   - Always provide both Hindi and English translations
   - Use the format: `हिंदी | English`
   - Maintain consistent translation pairs

2. **Cultural Considerations**
   - Use appropriate terminology for Indian legal context
   - Consider regional variations in legal terms
   - Follow Indian design patterns where appropriate

### Component Guidelines

1. **Props**
   - Define prop types using TypeScript interfaces
   - Document required and optional props
   - Provide default values where appropriate

2. **State Management**
   - Use React hooks for local state
   - Keep state as close to usage as possible
   - Document state dependencies

3. **Performance**
   - Implement proper memoization
   - Avoid unnecessary re-renders
   - Use performance monitoring tools

## Pull Request Process

1. Create a feature branch
2. Update documentation
3. Ensure all tests pass
4. Submit PR with clear description
5. Address review comments

## Testing Guidelines

1. **Component Testing**
   - Test component rendering
   - Test user interactions
   - Test error states
   - Test bilingual content

2. **Accessibility Testing**
   - Ensure WCAG compliance
   - Test with screen readers
   - Verify keyboard navigation

## Documentation

1. **Code Comments**
   - Document complex logic
   - Explain business rules
   - Note any assumptions

2. **Component Documentation**
   - Document props and types
   - Provide usage examples
   - Include accessibility notes

3. **README Updates**
   - Document new features
   - Update installation steps
   - Keep screenshots current