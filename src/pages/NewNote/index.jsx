import { useState } from "react";

import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { ButtonLink } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function NewNote() {
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleAddLink() {
    setLinks((prevState) => [...prevState, newLink]);
    setNewLink("");
  }

  function handleRemoveLink(deleted) {
    setLinks((prevState) => prevState.filter((link) => link !== deleted));
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewNote() {
    if (!title) {
      alert("Please, enter a title for your note!");
      return;
    }

    if (newLink) {
      alert(
        "There is a link in the note that has not yet been added. Please add all Links!"
      );
      return;
    }

    if (newTag) {
      alert(
        "There is a Tag in the note that has not yet been added. Please add all Tags!"
      );
      return;
    }

    if (links.length === 0) {
      alert("You are adding without any links!");
      setLinks([""]);
      return;
    }

    if (tags.length === 0) {
      alert("You are not adding tag!");
      setTags([""]);
      return;
    }

    await api.post("/notes", {
      title,
      description,
      tags,
      links,
    });

    alert("Note created successfully");
    navigate(-1);
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Create Note</h1>
            <ButtonText title="Back" onClick={handleBack} />
          </header>

          <Input
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            placeholder="Observations"
            onChange={(e) => setDescription(e.target.value)}
          />

          <Section title="Utils Links">
            {links.map((link, index) => {
              return (
                <NoteItem
                  key={String(index)}
                  value={link}
                  onClick={() => {
                    handleRemoveLink(link);
                  }}
                />
              );
            })}

            <NoteItem
              $isnew
              placeholder="New link"
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Tags">
            <div className="tags">
              {tags.map((tag, index) => {
                return (
                  <NoteItem
                    key={String(index)}
                    value={tag}
                    onClick={() => {
                      handleRemoveTag(tag);
                    }}
                  />
                );
              })}

              <NoteItem
                $isnew
                placeholder="New tag"
                onChange={(e) => setNewTag(e.target.value)}
                onClick={handleAddTag}
                value={newTag}
              />
            </div>
          </Section>
          <ButtonLink title="Save" onClick={() => handleNewNote()} />
        </Form>
      </main>
    </Container>
  );
}
