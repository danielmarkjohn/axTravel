# Travel Website

A modern, responsive website for travel solutions company. Built with React, TypeScript, and Tailwind CSS.

## Features

- Modern and responsive design
- Smooth animations with Framer Motion
- TypeScript for better type safety
- Tailwind CSS for styling
- Mobile-first approach
- SEO friendly

## Pages

- Home: Landing page with hero section and company overview
- Services: Comprehensive list of services offered
- Portfolio: Showcase of past projects
- Contact: Contact form and company information

## Prerequisites

- Node.js 14.x or higher
- npm or yarn

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/axsphere-website.git
   cd axsphere-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Build for production:
   ```bash
   npm run build
   # or
   yarn build
   ```

## Deployment to AWS S3

1. Create an S3 bucket in AWS Console
2. Configure the bucket for static website hosting
3. Set up appropriate bucket policies
4. Build the project:
   ```bash
   yarn build
   ```
5. Upload the contents of the `build` folder to your S3 bucket

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router DOM
- Headless UI
- Hero Icons

## Project Structure

```
src/
├── components/     # Reusable components
├── pages/         # Page components
├── App.tsx        # Main application component
└── index.tsx      # Application entry point
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

