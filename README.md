# Gunther Koo | Take Home Assignment

This is a GitHub Repository Search app, built in [Next.js](https://nextjs.org/)

## Getting Started

First, run the development server:

```bash
yarn install
# then
yarn dev
# for tests
yarn test
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Using the application

Enter a username or organization in the search bar and hit `Search`.
![Screenshot 2024-07-30 at 11 24 14 AM](https://github.com/user-attachments/assets/34d1a673-7a93-49ef-ad30-de1b55e663ea)

You can sort or filter your search by using the dropdown select next to the search bar.
![Screenshot 2024-07-30 at 11 50 52 AM](https://github.com/user-attachments/assets/e8343a39-000e-436f-bce7-01fa0bcc2b19)

Results will appear below the search bar, you can also view each page of results with the `Previous` and `Next` buttons on the top right.
![Screenshot 2024-07-30 at 11 51 07 AM](https://github.com/user-attachments/assets/13c30a7a-2243-4d19-b3b1-3fb218fc38f4)
![Screenshot 2024-07-30 at 11 51 22 AM](https://github.com/user-attachments/assets/ca4ef508-6922-41bf-bcdc-215963fadac4)

## Stack

NextJs - React - TypeScript - Tailwind

Using `react-query` (`useQuery`) to organize, simplify data fetching to handle loading and error states without additional state management.
