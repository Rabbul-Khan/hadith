# Hadiths API and UI Clone

This project aims to create a clone of the UI of [ihadis.com](https://ihadis.com/bukhari/1) using Next.js, Tailwind CSS, and Node.js. The project also includes the development of API endpoints to fetch books, chapters, sections, and hadiths data.

## Features

- **UI Clone**: The frontend replicates the design and functionality of [ihadis.com](https://ihadis.com/bukhari/1).
- **Responsive Design**: The UI is designed to be fully responsive, ensuring optimal viewing across various devices and screen sizes.
- **Functional Sidebar**: The sidebar includes sections for Books and Chapters, with functional links and collapsible sections.
- **Section Cards**: Each section is represented by cards with relevant information.
- **Hadith Cards**: Hadiths are displayed in cards with details such as hadith number, text, and related references.
- **API Integration**: Backend endpoints are implemented to provide data for the frontend UI.

## Technologies Used

- **Node.js**: Used for developing backend API endpoints.
- **Tailwind CSS**: Utilized for styling the frontend UI with a focus on responsiveness and utility classes.
- **Next.js**: Employed for building the frontend application with server-side rendering capabilities.

## Getting Started

### Prerequisites

- Node.js installed on your machine

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Rabbul-Khan/hadith.git

   ```

2. Navigate to the project directory:

   ```bash
   cd hadith

   ```

3. Install dependencies:

   ```bash
   npm install

   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Books

- **GET /api/books**: Get all books.
- **GET /api/books/:book_name**: Get a specific book.

### Chapters

- **GET /api/books/:book_name/chapters**: Get all chapters of a specific book.
- **GET /api/books/:book_name/chapters/:chapter_number**: Get a specific chapter from a specific book.

### Sections

- **GET /api/books/:book_name/chapters/:chapter_number/sections**: Get all sections of a specific chapter from a specific book.

### Hadiths

- **GET /api/books/:book_name/chapters/:chapter_number/sections/hadiths**: Get all hadiths of a specific section.

## Contributors

- [Mohammed Rabbul Hossain Khan](https://github.com/Rabbul-Khan)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Original UI design inspiration from [ihadis.com](https://ihadis.com/bukhari/1)
- Next.js documentation: https://nextjs.org/docs
- Tailwind CSS documentation: https://tailwindcss.com/docs
