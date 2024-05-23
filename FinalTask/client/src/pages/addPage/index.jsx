import React, { useState } from 'react';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as Yup from 'yup';
import { Table } from 'antd';
import { useDeleteMutation, useGetAllQuery, usePostMutation } from '../../services/productApi';


const AddPage = () => {
    const { data, refetch } = useGetAllQuery();
    const [deleteProduct] = useDeleteMutation();
    const [postProduct] = usePostMutation();
    const [filtered, setFiltered] = useState(data?.data)


    const handleChange = (option) => {
        const handleChange = (option) => {
            let sorted;
            if (option === 'az') {
                sorted = [...data?.data].sort((a, b) => a.title.localeCompare(b.title));
            } else if (option === 'za') {
                sorted = [...data?.data].sort((a, b) => b.title.localeCompare(a.title));
            } else if (option === '19') {
                sorted = [...data?.data].sort((a, b) => a.price - b.price);
            } else if (option === '91') {
                sorted = [...data?.data].sort((a, b) => b.price - a.price);
            } else {
                sorted = [...data?.data];
            }
            setFiltered(sorted);
        };
        
    }

    const SignupSchema = Yup.object().shape({
        title: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        price: Yup.number().required(),
        image: Yup.string().url()
            .required('Required'),
        description: Yup.string().required('Required'),
    });
    const formik = useFormik({
        initialValues: {
            title: '',
            price:'',
            image: '',
            description: '',
        },
        onSubmit: async (values, actions) => {
            await postProduct(values);
            actions.resetForm();
            refetch()
        },
        validationSchema: SignupSchema
    });
    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            showSorterTooltip: {
                target: 'full-header',
            },
        },
        {
            title: 'Price',
            dataIndex: 'price',
            showSorterTooltip: {
                target: 'full-header',
            },
        },
        {
            title: 'ImageUrl',
            dataIndex: 'image',
            render: (record) => {
                return <img src={record} width={60} alt={record.title} />
            }
        },
        {
            title: 'Description',
            dataIndex: 'description',
        },
        {
            title: 'Delete',
            render: (record) => (
                <Button onClick={async () => {
                    await deleteProduct(record._id);
                    refetch()
                }} color='error' variant='contained'>
                    Delete
                </Button>
            )
        },
    ];

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };
    return (
        <div className="container">
            <h1 style={{ textAlign: 'center', color: 'red' }}>Add Page</h1>
            <form onSubmit={formik.handleSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px',
                    paddingTop: '50px'
                }}>

                <TextField

                    id="outlined-required"
                    label="Title"
                    name="title"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                />

                {formik.errors.title && formik.touched.title && <div style={{ color: 'red' }} id="feedback">{formik.errors.title}</div>}

                <TextField

                    id="outlined-required"
                    label="Price"
                    name="price"
                    onChange={formik.handleChange}
                    value={formik.values.price}
                />

                {formik.errors.price && formik.touched.price && <div style={{ color: 'red' }} id="feedback">{formik.errors.price}</div>}

                <TextField

                    id="outlined-required"
                    label="ImageUrl"
                    name="image"
                    onChange={formik.handleChange}
                    value={formik.values.image}
                />

                {formik.errors.image && formik.touched.image && <div style={{ color: 'red' }} id="feedback">{formik.errors.image}</div>}



                <TextField

                    id="outlined-required"
                    label="Description"
                    name="description"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                />

                {formik.errors.description && formik.touched.description && <div style={{ color: 'red' }} id="feedback">{formik.errors.description}</div>}


                <Button type="submit" color='error' variant="outlined">Add Product</Button>
            </form>
            <select onChange={(e) => handleChange(e.target.value)} style={{ marginTop: '30px' }}>
                <option defaultValue>Select Option</option>
                <option value="az">A-Z</option>
                <option value="za">Z-A</option>
                <option value="19">Low to High</option>
                <option value="91">High to Low</option>
            </select>
            <Table
                columns={columns}
                dataSource={data?.data || filtered}
                onChange={onChange}
                showSorterTooltip={{
                    target: 'sorter-icon',
                }}
                style={{ paddingTop: '20px' }}
            />
        </div>
    );
};

export default AddPage