# Bad Apples

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

## Getting Started

Setup
Install dependencies and create db:

```
yarn install
yarn prisma migrate up --experimental
```

```bash
npm run dev
# or
yarn dev
```

### Importing new data

Grab the latest csv (if it is ever updated) from [new-york-civil-liberties-union/NYPD-Misconduct-Complaint-Database](github.com/new-york-civil-liberties-union/NYPD-Misconduct-Complaint-Database):

```sh
  # From project root
  curl https://raw.githubusercontent.com/new-york-civil-liberties-union/NYPD-Misconduct-Complaint-Database/master/CCRB_database_raw.csv > oinkers.csv
```

change csv headers to match schema of [Complaints table](./prisma/schema.prisma):

```
# Schema as of Aug 20, 2020:
AsOfDate,Unique Id,First Name,Last Name,Rank,Command,ShieldNo,Complaint Id,Incident Date,FADO Type,Allegation,Board Disposition,NYPDDisposition,PenaltyDesc

# becomes

asOfDate,copId,firstName,lastName,rank,command,shieldNo,id,incidentDate,FADOType,allegation,boardDisposition,NYPDDisposition,penaltyDesc
```

Import data from downloaded csv:

```
$ sqlite3 ./prisma/dev.db
.open "./prisma/dev.db"
.mode csv
.import oinkers.csv Complaints
SELECT firstName, lastName, allegation, boardDisposition, penaltyDesc FROM Complaints WHERE firstName = 'Erik';
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/zeit/next.js/) - your feedback and contributions are welcome!

## Deploy on ZEIT Now

The easiest way to deploy your Next.js app is to use the [ZEIT Now Platform](https://zeit.co/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
