
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Edit, Trash } from "lucide-react";
import CategoryForm from './CategoryForm';

// Sample categories data
const sampleCategories = [
  { id: '1', name: 'Skincare', description: 'Products for skin health and beauty', productCount: 15 },
  { id: '2', name: 'Makeup', description: 'Cosmetic products for face, eyes, and lips', productCount: 25 },
  { id: '3', name: 'Body', description: 'Body care and wellness products', productCount: 10 },
];

const CategoryManagement = () => {
  const [categories, setCategories] = useState(sampleCategories);
  const [showForm, setShowForm] = useState(false);
  const [editingCategory, setEditingCategory] = useState<any>(null);

  const handleAddCategory = () => {
    setEditingCategory(null);
    setShowForm(true);
  };

  const handleEditCategory = (category: any) => {
    setEditingCategory(category);
    setShowForm(true);
  };

  const handleDeleteCategory = (id: string) => {
    // In a real app, this would also delete from the database
    setCategories(categories.filter(category => category.id !== id));
  };

  const handleSaveCategory = (category: any) => {
    if (editingCategory) {
      // Update existing category
      setCategories(categories.map(c => c.id === category.id ? category : c));
    } else {
      // Add new category with a random ID (in a real app, the backend would generate this)
      setCategories([...categories, { ...category, id: Math.random().toString(), productCount: 0 }]);
    }
    setShowForm(false);
  };

  const handleCancelForm = () => {
    setShowForm(false);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Category Management</CardTitle>
          <Button onClick={handleAddCategory}>
            <Plus className="mr-2 h-4 w-4" /> Add Category
          </Button>
        </CardHeader>
        <CardContent>
          {showForm ? (
            <CategoryForm 
              category={editingCategory} 
              onSave={handleSaveCategory} 
              onCancel={handleCancelForm} 
            />
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Products</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {categories.map((category) => (
                  <TableRow key={category.id}>
                    <TableCell className="font-medium">{category.name}</TableCell>
                    <TableCell>{category.description}</TableCell>
                    <TableCell>{category.productCount}</TableCell>
                    <TableCell className="space-x-2">
                      <Button variant="outline" size="icon" onClick={() => handleEditCategory(category)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" onClick={() => handleDeleteCategory(category.id)}>
                        <Trash className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CategoryManagement;
