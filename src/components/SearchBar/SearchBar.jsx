import { ErrorMessage, Field, Form, Formik} from 'formik';
import toast from 'react-hot-toast';
import { IoSearch } from "react-icons/io5";
import css from './SearchBar.module.css';

const SearchBox = ({ onSearch }) => {

        return (
            <header className={css.header}>
                <Formik
                    initialValues={{ query: "" }}
                    onSubmit={(values, actions) => {
                        if (values.query.trim() === "") {
                            return toast.error("The field is empty! Please enter a query");
                        }
                        onSearch(values.query);
                        actions.resetForm();  
                    }}
                >
                    <Form className={css.form}>
                        <div className={css.inputContainer}>
                        <Field
                            className={css.input}
                            type="text"
                            name="query"
                            autoComplete="off"
                            autoFocus
                            placeholder="Search images and photos"
                        />
                    <button className={css.button} type="submit">
                                <IoSearch />
                            </button>
                        </div>
                        <ErrorMessage name="query" component="div"></ErrorMessage>
                 </Form>
                </Formik>
           </header>

        );
    };
export default SearchBox;