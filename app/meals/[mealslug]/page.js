import Image from "next/image";
import { notFound } from "next/navigation";

import classes from "./page.module.css";
import { getMeal } from "@/lib/meals.js";

// Special Function Name
export async function generateMetadata(props) {
  const params = await props.params;
  const meal = getMeal(params.mealslug);

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.description,
  };
}

export default async function MealDetailPage(props) {
  const params = await props.params;
  const meal = getMeal(params.mealslug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br >");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image
            src={`https://ahmedehab-next-food-demo-users-images.s3.amazonaws.com/${meal.image}`}
            alt={meal.title}
            fill
          />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
