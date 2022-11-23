// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import type { CardData } from '../../../domain/card';

type CardDataPayload = {
  data: CardData[]
}
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CardDataPayload>
) {
  res.status(200).json({ data: [
          { id: 1, title: "Lightbox loading issue on Safari", state: "Incoming Bugs", tags: ["Browser"], description: "Something here" },
          { id: 2, title: "Notifications Not Sending #4", state: "Incoming Bugs", tags: ["High Priority"] },
          { id: 3, title: "Download icon rendering issue", state: "Incoming Bugs", tags: ["Design", "High Priority"], description: "Something more" },
          { id: 4, title: "Tab to comment goes to wrong field", state: "Incoming Bugs", tags: ["Browser", "Low Priority"], description: "Here too" },
          { id: 5, title: "Localization", state: "In Progress", tags: ["High Priority"], tasks: [{title: "Choose a PR agency", is_complete: true}, {title: "Create messaging guidelines", is_complete: false}, {title: "Create ad banners", is_complete: false}], members: [{name: "Man standing near balcony", avatar_url: "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80"}]}
  ]})
}
